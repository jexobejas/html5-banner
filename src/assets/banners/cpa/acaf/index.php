<!DOCTYPE html>
<?
	global
	$arr_uTitle,
	$arr_uSource,
	$arr_uType,
	$arr_uWidth,
	$arr_uHeight,
	$arr_uClick,
	$mUnit,
	$clientName,
	$projectName;

	$clientName = "CPA";
	$projectName = "";
	
	$arr_uTitle = Array();
	$arr_uSource = Array();
	$arr_uType = Array();
	$arr_uWidth = Array();
	$arr_uHeight = Array();
	$arr_uClick = Array();
	
	$arr_uTitle[] = "English";
	$arr_uSource[] = "";
	$arr_uType[] = "title";
	$arr_uWidth[] = "";
	$arr_uHeight[] = "";
	$arr_uClick[] = "";

	//html banner

	$arr_uTitle[] = "300x250 - Demand";
	$arr_uSource[] = "en_demand_300x250/index.html";
	$arr_uType[] = "page";
	$arr_uWidth[] = "300";
	$arr_uHeight[] = "250";
	$arr_uClick[] = "";

	$arr_uTitle[] = "300x600 - Demand";
	$arr_uSource[] = "en_demand_300x600/index.html";
	$arr_uType[] = "page";
	$arr_uWidth[] = "300";
	$arr_uHeight[] = "600";
	$arr_uClick[] = "";

	$arr_uTitle[] = "728x90 - Demand";
	$arr_uSource[] = "en_demand_728x90/index.html";
	$arr_uType[] = "page";
	$arr_uWidth[] = "728";
	$arr_uHeight[] = "90";
	$arr_uClick[] = "";

	$arr_uTitle[] = "300x250 - Seek";
	$arr_uSource[] = "en_seek_300x250/index.html";
	$arr_uType[] = "page";
	$arr_uWidth[] = "300";
	$arr_uHeight[] = "250";
	$arr_uClick[] = "";

	$arr_uTitle[] = "300x600 - Seek";
	$arr_uSource[] = "en_seek_300x600/index.html";
	$arr_uType[] = "page";
	$arr_uWidth[] = "300";
	$arr_uHeight[] = "600";
	$arr_uClick[] = "";

	$arr_uTitle[] = "728x90 - Seek";
	$arr_uSource[] = "en_seek_728x90/index.html";
	$arr_uType[] = "page";
	$arr_uWidth[] = "728";
	$arr_uHeight[] = "90";
	$arr_uClick[] = "";

	$arr_uTitle[] = "French";
	$arr_uSource[] = "";
	$arr_uType[] = "title";
	$arr_uWidth[] = "";
	$arr_uHeight[] = "";
	$arr_uClick[] = "";

	//html banner

	$arr_uTitle[] = "300x250 - Demand";
	$arr_uSource[] = "fr_demand_300x250/index.html";
	$arr_uType[] = "page";
	$arr_uWidth[] = "300";
	$arr_uHeight[] = "250";
	$arr_uClick[] = "";

	$arr_uTitle[] = "300x600 - Demand";
	$arr_uSource[] = "fr_demand_300x600/index.html";
	$arr_uType[] = "page";
	$arr_uWidth[] = "300";
	$arr_uHeight[] = "600";
	$arr_uClick[] = "";

	$arr_uTitle[] = "728x90 - Demand";
	$arr_uSource[] = "fr_demand_728x90/index.html";
	$arr_uType[] = "page";
	$arr_uWidth[] = "728";
	$arr_uHeight[] = "90";
	$arr_uClick[] = "";

	$arr_uTitle[] = "300x250 - Seek";
	$arr_uSource[] = "fr_seek_300x250/index.html";
	$arr_uType[] = "page";
	$arr_uWidth[] = "300";
	$arr_uHeight[] = "250";
	$arr_uClick[] = "";

	$arr_uTitle[] = "300x600 - Seek";
	$arr_uSource[] = "fr_seek_300x600/index.html";
	$arr_uType[] = "page";
	$arr_uWidth[] = "300";
	$arr_uHeight[] = "600";
	$arr_uClick[] = "";

	$arr_uTitle[] = "728x90 - Seek";
	$arr_uSource[] = "fr_seek_728x90/index.html";
	$arr_uType[] = "page";
	$arr_uWidth[] = "728";
	$arr_uHeight[] = "90";
	$arr_uClick[] = "";

	$arr_ALL = Array();
	$arr_ALL[] = $arr_uTitle;
	$arr_ALL[] = $arr_uSource;
	$arr_ALL[] = $arr_uType;
	$arr_ALL[] = $arr_uWidth;
	$arr_ALL[] = $arr_uHeight;
	$arr_ALL[] = $arr_uClick;


	function buildMenu($mUnit, $arr_ALL){
		
		$aN = count($arr_ALL);
		$cN = count($arr_ALL[0]);
		//echo "<br />\n            ";		

		for($n = 0; $n < $cN; $n++){
			//----------------------------------------
			//	index values
			//	0 = title
			//	1 = source
			//	2 = type
			//----------------------------------------
			$title = $arr_ALL[0][$n];
			$source = $arr_ALL[1][$n];
			$type = $arr_ALL[2][$n];
			createMenu($n, $title, $type);
		}
	}
	function createMenu($n, $title, $type){
		if(empty($_GET['mUnit'])){
			$_GET['mUnit']="";
		}
		
		if($type == "title"){
			echo "<li class='nav-header'>" . $title . "</li>";
		}
		else {
			if ( $_GET['mUnit'] == $n ) {
				echo "<li class='active'><a href='?mUnit=" . $n . "'>" . $title . "</a></li>";
			} else {
				echo "<li><a href='?mUnit=" . $n . "'>" . $title . "</a></li>";
			}
		}
	}
	function createItem($mUnit, $arr_ALL){
		//----------------------------------------
		//	index values
		//	0 = title
		//	1 = source
		//	2 = type
		//	3 = width
		//	4 = height
		//	5 = clickTag (NEW)
		//----------------------------------------

		$title = $arr_ALL[0][$mUnit];
		$source = $arr_ALL[1][$mUnit];
		$type = $arr_ALL[2][$mUnit];
		$width = $arr_ALL[3][$mUnit];
		$height = $arr_ALL[4][$mUnit];
		$click = $arr_ALL[5][$mUnit];

		if($type == 'flash'){
			$source = 'flash/' . $source;
			
			echo "<script type='text/javascript'>\n";
			if ($click) {
				echo "          var flashvars = { clickTag: '" . $click . "' };\n";
			} else {
				echo "          var flashvars = {};\n";
			}
			echo "          var params = {\n";
			echo "            wmode: 'opaque'\n";
			echo "          };\n";
			echo "          var attributes = {};\n";
			echo "          swfobject.embedSWF('" . $source . "', 'fla', '" . $width . "', '". $height . "', '8.0.0', null, flashvars, params, attributes);\n";
			echo "        </script>\n";
		}

		if($type == 'image'){
			$source = 'img/' . $source;
			echo "<img src='" . $source . "' alt='" . $title . "' title='" . $title . "' />\n";
		}

		if($type == 'page'){
			$source = 'pages/' . $source;
			$tempSource=split("/", $source);
			for($i=0;$i<count($tempSource)-1;$i++){
				$dir.=$tempSource[$i] . '/';
			}
			$files= scandir($dir);
			$actualFileCount=0;
			for($i=0;$i<count($files);$i++){
				if(substr($files[$i], 0,1)!='.'){
					$totalSize+=filesize($dir.'/'.$files[$i]);
					$actualFileCount++;
				}
			}
			echo "<iframe src='$source' style='width:".$width."px; height:".$height."px; border:0; padding:0; margin:0;'></iframe>";

			echo '<div>Size: ' . round($totalSize/1024, 1) . 'KB<br>File count: '.$actualFileCount.'</div><br>';
			
		}

		if($type == 'website'){
			$width += 20;
			$height += 20;
			echo "<script type='text/javascript'>";
			echo "          window.open('" . $source . "', 'html', 'width=" . $width . ",height=" . $height . ",status=0,left=25,top=25,screenX=0,screenY=0,resizable=yes,scrollbars=yes');";
			echo "        </script>";
		}

		if ($type == 'image' || $type == 'flash'){
			$type_size = Array ('bytes', 'kilobytes', 'megabytes', 'gigabytes');
			$filesize = filesize ($source);
			for ($i = 0; $filesize > 1024; $i++) {
				$filesize /= 1024;
			}
			echo "        <p><i class='icon-file'></i> <b>" . $title . "</b></p>\n";
			echo "        <p><i class='icon-info-sign'></i> " . round ($filesize, 2) . " $type_size[$i] </p>\n";
		} else if ($type == 'website' || $type == 'page') {
			
		}
	}
?>
<html lang="en">
<head>
  <meta http-equiv="content-type" content="text/html; charset=UTF-8">
  <meta charset="utf-8">
  <title><? echo $clientName . " - " . $projectName ?></title>
	<meta name="viewport" content="width=768, initial-scale=1.0">
  <meta name="description" content="Client preview for <? echo $clientName . " - " . $projectName ?>">
  <meta name="author" content="">

  <!-- Le styles -->
  <link href="css/bootstrap-fluid.css" rel="stylesheet">
  <!-- Le HTML5 shim, for IE6-8 support of HTML5 elements -->
  <!--[if lt IE 9]>
    <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
  <![endif]-->
	<style>
	iframe:focus {
	    outline: none;
	}

	iframe[seamless] {
	    display: block;
	} 
	</style>
    <script src="js/swfobject.js"></script>
</head>

<body>

  <div class="container-fluid" style="padding-bottom:10px; margin-bottom:10px;">
  	<div class="row-fluid">
        <div class="page-header pull-left" style="border-bottom:0px solid #fff;">
          <h1><? echo $clientName . " - " . $projectName ?></h1>
          <br>
		    <div class="row">
		      <div class="span-nav">
		        <div class="well sidebar-nav">
		          <ul class="nav nav-list">
		          <?
		            if(empty($_GET['mUnit'])){
		              $_GET['mUnit']="";
		            }
		            buildMenu($_GET['mUnit'], $arr_ALL);
		          ?>
		          </ul>
		        </div>
		      </div>
		      <div class="span-content preview-item" style="margin-left:100px;">
		        <?
		          if(!empty($_GET['mUnit'])){
		            createItem($_GET['mUnit'], $arr_ALL);
		          }
		        ?>
		        <div id="fla"></div>
		      </div>
		    </div>
		</div>
        <div class="brand pull-right" style="padding:12px 0; float:right; width:100px;">
          <img src="images/tribal.png" style="width:100%"/>
        </div>
    </div>
  </div>

  

    <hr>

  </div>
</body>
</html>