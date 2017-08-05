    <?php
/**
 * Created by PhpStorm.
 * User: edesimone
 * Date: 01/04/16
 * Time: 13:50
 */


//$stdin = fopen('php://stdin', 'r');
//
//
//$f = fopen( 'php://stdin', 'r' );
//
//
//$tt= fgets( $f );
//
//
//while( $line = fgets( $f ) ) {
//    echo $line;
//}
//
//fclose( $f );
//
//print_r($stdin);

    $array = array(1, 2, 3, 9, 10, 11, 14);


    function pasteTogether($val)
    {
        $newVals = array();
        $min = $val[0];
        $max = $val[1];
        $counter = 0;
        for ($i = 0; $i < count($val); $i++)
        {
            if ($val[$i + 1] === $val[$i] + 1)
            {
                $max = $val[$i + 1];
            }
            else
            {
                $tempVal = $min."-".$max;
                $newVals[$counter] = $tempVal;
                $counter++;
                $min = $val[$i];
            }
        }
        return $newVals;
    }

    pasteTogether($array);

