<?php
/**
 * Created by PhpStorm.
 * User: edesimone
 * Date: 03/04/18
 * Time: 00:30
 */


class Order
{
    private $statuses = [
        'new' => 'New',
        'processing' => 'Processing',
        'payed' => 'Payed',
        'fulfilled' => 'Fulfilled'
    ];

    /** Shipment */
    public $shipping;

    /** PaymentMethod */
    public $paymentMethod;

    /** @var Product */
    public $product;

    /** @var string */
    public $status;

    /** @var int */
    public $quantity;

    /** @var [] */
    public $items;
}

class OrderService
{
    /** @var Order */
    public $order;

    public function setOrder(Order $order) {
        $this->order = $order;
    }

    private function getOrder() {
        return $this->order;
    }

    private function setShipping($method)
    {
        $order = $this->getOrder();
        if ($order->status != 'new') {
            throw new Exception('Order is not editable');
        }
        $order->shipping = $method;
    }

    public function process($order)
    {
        $order->status = 'processing';
        $order->save();

        if ($order->payment && $order->payment->isPaid() && (!$order->isSample || $order->quantity > 0)) {
            $this->complete();
        }
    }

    private function setRecipient(Address $address)
    {
        $order = $this->getOrder();
        if ($order->status != 'new') {
            throw new Exception('Order is not editable');
        }
        $order->recipient = $address;
    }

    private function pay()
    {
        $order = $this->getOrder();
        if ($order->status != 'new') {
            throw new Exception('Order is not editable');
        }
        $this->paymentService->pay($order);
    }

    public function complete()
    {
        $order = $this->getOrder();
        foreach ($order->items as $item) {
            $shipment = $this->newShipment();
            $shipment->addItem($item);
            $shipment->save();
            $product = $item->product;
            $product->stock -= $item->quantity;
            $product->updatedat = time();
            $product->save();
        }

        if ($order->status !== 'fulfilled') {
            $order->status = 'fulfilled';
        }

        $order->save();
    }
}


