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
    </head>