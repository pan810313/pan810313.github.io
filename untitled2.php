<!DOCTYPE html>
<html>
<head>
	<title>testphp</title>
</head>
<body>

<?php
echo "My first PHP script!";
?><br>


<?php
// 建立MySQL的資料庫連接 
$link = @mysqli_connect( 
            'localhost',  // MySQL主機名稱 
            'root',       // 使用者名稱 
            'root',  // 密碼 
            'test');  // 預設使用的資料庫名稱 
if ( !$link ) {
   echo "MySQL資料庫連接錯誤!<br/>";
   exit();
}
else {
   echo "MySQL資料庫test連接成功!<br/>";
}


$sql = "SELECT id, name, no, class FROM class";
$result = $link->query($sql);

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        echo "<br> id: ". $row["id"]. " - 姓名: ". $row["name"]. " 座號: "." " . $row["no"] ." 班級: "." " . $row["class"] . "<br>";
    }
} else {
    echo "0 results";
}



mysqli_close($link);  // 關閉資料庫連接
?>
</body>
</html>