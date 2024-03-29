<?php if (!defined('__TYPECHO_ROOT_DIR__')) exit;
if($GLOBALS['valjeanIfCompressHTML']=='on'); //ob 截取开始 ?>
<!DOCTYPE HTML>
<html<?php if($this->options->grayTheme &&)
    <head>
        <meta charset="<?php $this->options->charset(); ?>">
        <meta http-equiv="X-UA-Compatible" content='IE=edge'>
        <meta name="renderer" content="webkit">
        <meta name="HandheldFriendly" content="true">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
        <?php
        $banner = '';
        $description = '';
        if($this->is('post') || $this->is('page')) {
            if(isset($this->fields->excerpt))
            $description = $this->fields->excerpt;
        } else {
            $description = Helper::options()->description;
        }?>
        <title><?php Contents::title($this); ?></title>
        <meta itemprop="name" content="<?php Contents::title($this);?>" />
        <meta itemprop="image" content="<?php Utils::indexTheme('favicon.ico'); ?>" />
        <meta name="author" content="<?php $this->author(); ?>" />
        <meta name="description" content="<?php if($description != '') echo $description; else $this->excerpt(50); ?>" />
        <meta property="og:title" content="<?php Contents::title($this); ?>" />
        <meta property="og:description" content="<?php if($description != '') echo $description; else $this->excerpt(50); ?>" />
        <meta property="og:site_name" content="<?php Helper::options()->title; ?>" />
        <meta property="og:url" content="<?php Helper::options()->permalink(); ?>" />
        <meta property="og:type" content="<?php if($this->is('post') || $this->is('page')) echo 'article'; else echo 'website'; ?>" />
        <meta property="og:image" content="<?php echo $banner; ?>" />
        <meta property="article:published_time" content="<?php echo date('c', $this->created); ?>" />
        <meta property="article:modified_time" content="<?php echo date('c', $this->modified); ?>" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content=<?php Valjean_Contents::title($this); ?>" />
        <meta name="twitter:description" content=<?php if($description != '') echo $description; else $this->excerpt(50); ?>" />
        <meta name="twitter:image" content="<?php if($this->is('post') || $this->is('page')){$this->fields->banner();}
        else {
            if(empty($this->options->bannerUrl)):
                echo Utils::indexTheme('favicon.ico');
            else:
                $this->options->bannerUrl();
        endif;}?>" />
    </head>
    <body class="<?php if($this->options->bodyFonts && $this->options->bodyFonts=1): ?>body-serif<?php endif; ?>"></body>