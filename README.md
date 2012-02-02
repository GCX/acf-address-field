Advanced Custom Fields - Address Field add-on
================================================================

This is an add-on for the [Advanced Custom Fields](http://www.advancedcustomfields.com/)
WordPress plugin that adds an Address field type.

The address field provides the ability to enter an address by component (street, city, state,
postal code, country, ...), enable or disable components, and change the layout of the
entered address (on the post screen) and printed address ( get_value() api call).

The address field is self registering meaning that there is no need to register it with
Advanced Custom Fields, it will register itself.

Notice
-------

The address field has default labels and css class names that are configurable per field.
Currently the default values for these do not show up when adding a new field due to an
issue with Advanced Custom Fields clearing all content from inputs on new fields.
See [Field input defaults removed when clicking Add Field.](http://www.advancedcustomfields.com/support/discussion/1247/field-input-defaults-removed-when-clicking-add-field.)

Usage
-------

* Download or clone the acf-address-field repo to your plugin or theme:
  * [acf-address-field.zip](https://github.com/GCX/acf-address-field/zipball/master) or
  * `git clone git://github.com/GCX/acf-taxonomy-field.git acf-ddress-field`
* Include the `address-field.php` file:  
  `include_once( rtrim( dirname( __FILE__ ), '/' ) . '/acf-address-field/address-field.php' );`

Todo
-------

* Add and Remove additional address components.
* Builtin Shortcode to render address field. Shortcode will also allow printing individual
  address components.

Issues
-------

Report any issues or feature requests [here](https://github.com/GCX/acf-address-field/issues).