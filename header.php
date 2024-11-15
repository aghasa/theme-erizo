<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package erizo
 */
?>

<!doctype html>
<html <?php language_attributes(); ?>>

<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="profile" href="https://gmpg.org/xfn/11">
    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
    <?php wp_body_open(); ?>

    <div id="page" class="site">
        <a class="skip-link screen-reader-text" href="#primary"><?php esc_html_e('Skip to content', 'erizo'); ?></a>

        <header id="masthead" class="site-header">
            <div class="header-container">
                <div class="header-logo">
                    <?php
                    if (has_custom_logo()) {
                        the_custom_logo();
                    } else {
                        echo '<img src="' . esc_url(get_template_directory_uri() . '/images/logo.png') . '" alt="' . get_bloginfo('name') . '">';
                    }
                    ?>
                </div>

                <!-- Menú -->
                <div class="header-menu">
                    <button class="hamburger-icon" id="hamburger-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40"
                            viewBox="0,0,300,150">
                            <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt"
                                stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0"
                                font-family="none" font-weight="none" font-size="none" text-anchor="none"
                                style="mix-blend-mode: normal">
                                <g transform="scale(4,4)">
                                    <path d="M7,29v5l50,1v-7zM7,11v6h50v-6zM7,46v7l50,-1v-5z"></path>
                                </g>
                            </g>
                        </svg>
                    </button>
                    <?php
                    wp_nav_menu(array(
                        'theme_location' => 'menu-1',
                        'menu_class' => 'menu-list',
                        'container' => false,
                    ));
                    ?>
                </div>
            </div>
        </header><!-- #masthead -->
    </div><!-- #page -->

    <?php wp_footer(); ?>
</body>

</html>