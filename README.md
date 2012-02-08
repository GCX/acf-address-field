Advanced Custom Fields - Address Field add-on
================================================================

This is an add-on for the [Advanced Custom Fields](http://www.advancedcustomfields.com/)
WordPress plugin that adds an Address field type.

The address field provides the ability to enter an address by component (street, city, state,
postal code, country, ...), enable or disable components, and change the layout of the
entered address (on the post screen) and printed address ( get_value() api call).

### Source Repository on GitHub
https://github.com/GCX/acf-address-field

### Bugs or Suggestions
https://github.com/GCX/acf-address-field/issues

Installation
------------

The Address Field plugin can be used as WordPress plugin or included in other plugins or themes.
There is no need to call the Advanced Custom Fields `register_field()` method for this field.

* WordPress plugin
	1. Download the plugin and extract it to `/wp-content/plugins/` directory.
	2. Activate the plugin through the `Plugins` menu in WordPress.
* Added to a Theme or Plugin
	1. Download the plugin and extract it to your theme or plugin directory.
	2. Include the `address-field.php` file in you theme's `functions.php` or plugin file.  
	   `include_once( rtrim( dirname( __FILE__ ), '/' ) . '/acf-address-field/address-field.php' );`

Todo
-------

* Add and Remove additional address components.
* Builtin Shortcode to render address field. Shortcode will also allow printing individual
  address components.

Frequently Asked Questions
--------------------------

### I've activated the plugin, but nothing happens!

Make sure you have [Advanced Custom Fields](http://wordpress.org/extend/plugins/advanced-custom-fields/) installed and
activated. This is not a standalone plugin for WordPress, it only adds additional functionality to Advanced Custom Fields.