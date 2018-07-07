<?php
/**
 * Created by PhpStorm.
 * User: edesimone
 * Date: 02/04/18
 * Time: 19:46
 */

/*
 * Complete the function below.
 */
//
//function oddNumbers($l, $r) {
//    $a= [];
//    if ($l <= $r) {
//
//        for(;$l <= $r; $l++){
//            if (!($l % 2 == 0)) {
//                array_push($a,$l);
//            }
//        }
//    }
//    return $a;
//}
//
//$file = fopen(getenv('OUTPUT_PATH'),"w");
//
//$__fp = fopen("php://stdin", "r");
//
//fscanf($__fp, "%d", $_l);
//
//
//fscanf($__fp, "%d", $_r);
//
//$res = oddNumbers($_l, $_r);
//foreach ($res as $res_cur) {
//    fwrite($file, $res_cur . "\n" );
//}
//fclose($file);
//class MyClass Implements BaseInterface, SecondaryInterface
//{
//    public function SomeMethod() { /* Do a third thing */ }
//    public function OtherMethod() { /* Do a third thing */ }
//}
//
//interface IBase
//{
//    public function SomeMethod(): void { /* Do stuff here */ }
//}
//
//trait myTrait
//{
//    public function SomeMethod() { /* Do different stuff here */ }
//}

//function ReverseString($str) {
//    for($i=strlen($str)-1, $j=0; $j<$i; $i++, $j++) {
//        list($str[$j], $str[$i]) = [$str[$i], $str[$j]];
//        //list($s[$j], $s[$i]) = array($s[$i], $s[$j]);
//    }
//
//    return $str;
//}
//
//$s = 'abcdefghijklm';
//for($i=strlen($s)-1, $j=0; $j<$i; $i--, $j++) {
//    list($s[$j], $s[$i]) = array($s[$i], $s[$j]);
//}
//echo $s;
//
//
//ReverseString("abcde");




//class RemoteConnect
//{
//    public function connectToServer($serverName=null)
//    {
//        if($serverName==null){
//            throw new Exception(“That's not a server name!”);
//    }
//    $fp = fsockopen($serverName,80);
//    return ($fp) ? true : false;
//  }
//
//  public function returnSampleObject()
//  {
//    return $this;
//  }
//}
//
//require_once(\'RemoteConnect.php\');
//
//class RemoteConnectTest extends PHPUnit_Framework_TestCase
//{
//  public function setUp(){ }
//  public function tearDown(){ }
//
//  public function testConnectionIsValid()
//  {
//    // test to ensure that the object from an fsockopen is valid
//    $connObj = new RemoteConnect();
//    $serverName = \'www.google.com\';
//    $this->assertTrue($connObj->connectToServer($serverName) !== false);
//  }
//}
//
//
//
//class Test {
//    public function sum($a, $b) {
//        if($a > $b) {
//            throw new Exception(\'Condition is wrong\');
//        }
//
//        return $a+$b;
//    }
//}
//
//require_once('Test.php');
//
//class TestUnit extends PHPUnit_Framework_TestCase
//{
//  public function testSumIsValid()
//  {
//    // test to ensure that the sum is valid
//    $test = new Test();
//    $this->assertTrue($test->sum(1,1) !== false);
//  }
//}
//
//

