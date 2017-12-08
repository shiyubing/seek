<?php
$servername = "localhost";
$username = "frank";
$password = "frank";
$database = "seek";

$conn = new mysqli($servername, $username, $password, $database);
$type = $_GET['type'];
$rows = array();
$sql = "";
// Latest jobs count.
if ($type == "1"){
  $sql = "select substring(fetch_date, 1, 13) as time, count(id) as count from jobs group by time order by time desc limit 0, 12";
} 
// Jobs by classification.
else if ($type == "2"){
  $sql = "select * from class_count";
} 
// Jobs by sub classification.
else if ($type == "3"){
  $classId = $_GET['classId'];
  $sql = "select * from sub_class_count where class_id = " . $classId;
} 
// Jobs by city.
else if ($type == "4"){
  $sql = "select count(j.id) as count, l.city from jobs j, location l where expired = 0 and j.id=l.id group by l.city order by count desc";
} 
// Jobs by date.
else if ($type == "20"){
  $sql = "select count(id) as count, substring(list_date, 1, 10) as date from jobs where substring(list_date, 1, 10) > '2017-11-12' group by date order by date";
}

$result = $conn->query($sql);
while($r = mysqli_fetch_assoc($result)) {
    $rows[] = $r;
}
print json_encode($rows);
?>