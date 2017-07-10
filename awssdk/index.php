<?php
/**
 * Created by PhpStorm.
 * User: edesimone
 * Date: 13/12/16
 * Time: 17:08
 */

// Include the SDK using the Composer autoloader
require 'vendor/autoload.php';


$s3 = new Aws\S3\S3Client([
    'version'     => 'latest',
    'region'      => 'ap-southeast-2',
//    'credentials' => [
//        'key'    => 'AKIAIKGLCT7XU2AJDCQA',
//        'secret' => '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'
//    ]
]);

// Use the us-west-2 region and latest version of each client.
$sharedConfig = [
    'version'     => 'latest',
    'region'      => 'ap-southeast-2',
    'credentials' => [
        'key'    => 'AKIAIKGLCT7XU2AJDCQA',
        'secret' => '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'
    ]
];

// Create an SDK class used to share configuration across clients.
$sdk = new Aws\Sdk($sharedConfig);


// Create an Amazon S3 client using the shared configuration data.
//$client = $sdk->createS3();

//s_access_key_id = AKIAIKGLCT7XU2AJDCQA
//aws_secret_access_key = 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

// Use an Aws\Sdk class to create the S3Client object.
$s3Client = $sdk->createS3();

// Send a PutObject request and get the result object.
//$result = $s3Client->putObject([
//    'Bucket' => 'flowerfox',
//    'Key'    => 'my-key',
//    'Body'   => 'this is the body!'
//]);
$results = $s3Client->getPaginator('ListObjects', ['Bucket' => 'flowerfox']);
foreach ($results as $result) {
    // You can extract any data that you want from the result.
    foreach ($result['Contents'] as $object) {
        echo $object['Key'] . "\n";
    }
}


$result = $s3Client->putObject(array(
    'Bucket' => 'flowerfox',
    'Key'    => 'miprimerarchivo',
    'Body'   => 'Hello, world!'
));

echo $result['ObjectURL'];

// Print the body of the result by indexing into the result object.
echo $result['Body'];

$pathToFile='/home/edesimone/www/auxiliar/awssdk/samplefile/flor3.jpg';

$bucket= 'flowerfox';

//try {
//    // Upload data.
//    $result = $s3Client->putObject(array(
//        'Bucket'     => $bucket,
//        'Key'        => 'flor3.jpg',
//        'SourceFile' => $pathToFile,
//        'ACL'    => 'public-read'
//    ));
//
//    // Access parts of the result object
//    echo $result['Expiration'] . "\n";
//    echo $result['ServerSideEncryption'] . "\n";
//    echo $result['ETag'] . "\n";
//    echo $result['VersionId'] . "\n";
//    echo $result['RequestId'] . "\n";
//
//// Get the URL the object can be downloaded from
//    echo $result['ObjectURL'] . "\n";
//
//} catch (S3Exception $e) {
//    echo $e->getMessage() . "\n";
//}
?>
<html>
    <head><meta charset="UTF-8"></head>
    <body>
        <h1>S3 upload example</h1>
<?php
if($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_FILES['userfile']) && $_FILES['userfile']['error'] == UPLOAD_ERR_OK && is_uploaded_file($_FILES['userfile']['tmp_name'])) {
    // FIXME: add more validation, e.g. using ext/fileinfo
    try {
        // FIXME: do not use 'name' for upload (that's the original filename from the user's computer)
        $upload = $s3Client->upload($bucket, $_FILES['userfile']['name'], fopen($_FILES['userfile']['tmp_name'], 'rb'), 'public-read');
        ?>
        <p>Upload <a href="<?=htmlspecialchars($upload->get('ObjectURL'))?>">successful</a> :)</p>
    <?php } catch(Exception $e) { ?>
        <p>Upload error :(</p>
    <?php } } ?>
<h2>Upload a file</h2>
<form enctype="multipart/form-data" action="<?=$_SERVER['PHP_SELF']?>" method="POST">
    <input name="userfile" type="file"><input type="submit" value="Upload">
</form>
</body>
</html>

