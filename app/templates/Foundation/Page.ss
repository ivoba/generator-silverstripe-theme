<!doctype html>
<!--[if !IE]><!-->
<html lang="$ContentLocale">
<!--<![endif]-->
<!--[if IE 6 ]>
<html lang="$ContentLocale" class="ie ie6"><![endif]-->
<!--[if lt IE 7]>
<html lang="$ContentLocale" class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>
<html lang="$ContentLocale" class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>
<html lang="$ContentLocale" class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!-->
<html lang="$ContentLocale" class="no-js"> <!--<![endif]-->
<head>
    <% base_tag %>
    <title><% if $MetaTitle %>$MetaTitle<% else %>$Title<% end_if %> &raquo; $SiteConfig.Title</title>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    $MetaTags(false)
    <!--[if lt IE 9]>
    <script src="//html5shiv.googlecode.com/svn/trunk/html5.js"></script>
    <![endif]-->
    <!-- build:js /scripts/vendor/modernizr.js -->
    <script src="$ThemeDir/bower_components/modernizr/modernizr.js"></script>
    <!-- endbuild -->
    <link rel="stylesheet" href="$ThemeDir/css/main.css"/>
    <link rel="shortcut icon" href="$ThemeDir/images/favicon.ico"/>
</head>
<body class="$ClassName<% if not $Menu(2) %> no-sidebar<% end_if %>"
      <% if $i18nScriptDirection %>dir="$i18nScriptDirection"<% end_if %>>
<a href="$BaseHref" rel="home"/>
<!--[if lt IE 9]>
<p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade
    your browser</a> to improve your experience.</p>
<![endif]-->

<% include Header %>
<div class="row" role="main">
    <div class="large-12 columns off-canvas-wrap docs-wrap">
        <div class="inner-wrap">
            <% include  ResponsiveNavigation %>
            $Layout
            <a class="exit-off-canvas"></a>
        </div>
    </div>
</div>
</div>
<% include Footer %>
</body>
</html>
