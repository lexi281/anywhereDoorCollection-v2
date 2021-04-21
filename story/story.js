const elements = document.querySelectorAll('[data-js="filter"]');
if (elements.length) {
  import('https://elements.stoumann.dk/assets/js/css-filter.mjs')
    .then(module => {
    const jsClass = module.default;
    elements.forEach(element => {
      new jsClass(element, element.dataset, presets);
    });
  })
}

const presets = [
  {
  "name": "watercolor",
  "description": "",
  "value": "url('#squiggly-1') brightness(1.3) invert(0.17) saturate(2.6) sepia(0.25)",
  "values": [
    {
      "brightness": 1.3,
      "invert": 0.17,
      "saturate": 2.6,
      "sepia": 0.25,
      "url": "url('#squiggly-1')"
    }
  ]
},
	
{
	"name": "watercolor",
	"description": "",
	"value": "brightness(1.4) saturate(1.8) url('#squiggly-1') filedrop(NaN) invert(0.07) contrast(0.9) sepia(0.04)",
	"values": [
		{
			"brightness": 1.4,
			"saturate": 1.8,
			"url": "url('#squiggly-1')",
			"filedrop": null,
			"invert": 0.07,
			"contrast": 0.9,
			"sepia": 0.04
		}
	]
}