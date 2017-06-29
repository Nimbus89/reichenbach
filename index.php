<!doctype html>

<html id='main-page' lang="en">
<head>
  <meta charset="utf-8">
  <link rel="stylesheet" href="css/styles.css">
  <link rel="stylesheet" href="css/spinner.css">
</head>

<body>
  <script src="js/jquery.min.js"></script>
  <script src="js/underscore.js"></script>
  <script src="js/jquery-ui.min.js"></script>
  <script src="js/spinner.js"></script>

  <h1><img src='img/majin-white.png' /></h1>

  <div id="spinner-template" style="display:none;">
  	<div class="spinner-container">
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" x="0px" y="0px"
           viewBox="0, 0, 100, 100">
      <g>
      <g class="spinner">
      <circle class="path" fill="none" stroke="#7DB0D5" stroke-width="7" stroke-miterlimit="10" stroke-linecap="round" cx="50" cy="50" r="44" />
                                                  </g>
      <polyline class="check" fill="none" stroke="#7DB0D5" stroke-width="8" stroke-linecap="round" stroke-miterlimit="10" stroke-linejoin="round"
                points="70,35 45,65 30,52" />
      <path class="cross" fill="none" stroke="#7DB0D5" stroke-width="16" stroke-linecap="round" stroke-miterlimit="10"
            d="M70,30 l-40,40 M70,70 l-40,-40" />
                                              </g>
                                          </svg>
  </div>
</div>

  <div class='inputs'>
    <input id='input1' maxlength="2"></input>
    <input id='input2' maxlength="2"></input>
    <input id='input3' maxlength="2"></input>
    <input id='input4' maxlength="2"></input>
    <input id='input5' maxlength="2"></input>
    <input id='input6' maxlength="2"></input>
    <input id='input7' maxlength="2"></input>
    <input id='input8' maxlength="2"></input>
  </div>
  <button>-></button>
  <div class='outputs invisible'>
    <input maxlength="1" disabled="disabled" readonly="readonly"></input>
    <input maxlength="1" disabled="disabled" readonly="readonly"></input>
    <input maxlength="1" disabled="disabled" readonly="readonly"></input>
    <input maxlength="1" disabled="disabled" readonly="readonly"></input>
    <input maxlength="1" disabled="disabled" readonly="readonly"></input>
    <input maxlength="1" disabled="disabled" readonly="readonly"></input>
    <input maxlength="1" disabled="disabled" readonly="readonly"></input>
    <input maxlength="1" disabled="disabled" readonly="readonly"></input>
  </div>

  <div id="spinner"></div>
</body>

  <script src="js/scripts.js"></script>
</html>
