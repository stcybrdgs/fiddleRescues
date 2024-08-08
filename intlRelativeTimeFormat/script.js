/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat#try_it

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/RelativeTimeFormat

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_identification_and_negotiation

IANA Language Subtag Registry
https://www.iana.org/assignments/language-subtag-registry/language-subtag-registry
*/

// From the fiddle Intl.RelativeTimeFormat
const rtf1 = new Intl.RelativeTimeFormat('en', { style: 'narrow' })
const rtf2 = new Intl.RelativeTimeFormat('es', { numeric: 'auto' })

console.log(rtf1.format(3, 'quarter'))
//expected output: "in 3 qtrs."

console.log(rtf1.format(-1, 'day'))
//expected output: "1 day ago"

console.log(rtf1.format(2, 'day'))
//expected output: "pasado mañana"

// Create a relative time formatter in your locale
// with default values explicitly passed in.
// new Intl.RelativeTimeFormat(locale, options);
const rtf = new Intl.RelativeTimeFormat('es', {
  localeMatcher: 'best fit', // other values: "lookup"
  numeric: 'always', // other values: "auto"
  style: 'long', // other values: "short" or "narrow"
})
let timeUnit = 'minute'
let number = -57
let string = rtf.format(number, timeUnit)
console.log('string:', string)
string = rtf.formatToParts(number, timeUnit)
console.log('string:', string)

// ----------------------------------------
// Formatting dates and numbers
// You can use Intl to format dates and numbers in a form that's
// conventional for a specific language and region:
const count = 26254.39
const date = new Date('2012-05-24')

function log(locale) {
  console.log(
    `${new Intl.DateTimeFormat(locale).format(date)} ${new Intl.NumberFormat(
      locale
    ).format(count)}`
  )
}

log('en-US')
// expected output: 5/24/2012 26,254.39

log('de-DE')
// expected output: 24.5.2012 26.254,39

// ----------------------------------------

/*
// Constructor Methods:
// creates a new Intl.RelativeTimeFormat object
Intl.RelativeTimeFormat(locales, options)

where locales is a string with a BCP 47 language tag, or an array of such strings.
en-US	English as used in the United States
es-MX	Spanish as used in Mexico

You can find the languages in the IANA registry

where options is an object with some or all of the following properties:
localeMatcher
The locale matching algorithm to use. Possible values are "lookup" and "best fit"; the default is "best fit". For information about this option, see the Intl page.

numeric
The format of output message. Possible values are:
"always" (default, e.g., 1 day ago),
or "auto" (e.g., yesterday). The "auto" value allows to not always have to use numeric values in the output.

style
The length of the internationalized message. Possible values are:
"long" (default, e.g., in 1 month)
"short" (e.g., in 1 mo.),
or "narrow" (e.g., in 1 mo.). The narrow style could be similar to the short style for some locales.



// Static Methods
// Returns array of locales supported w/o having to use rt default locale
Intl.RelativeTimeFormat.supportedLocalesOf()

// Instance Methods
// formats value and unist according to the locale
Intl.RelativeTimeFormat.prototype.format()

// returns array of objects with parts that can be used for local formatting
Intl.RelativeTimeFormat.prototype.formatToParts()

// returns new obj with props reflecting locale and formatting
// options computed during initialization of the object
Intl.RelativeTimeFormat.prototype.resolvedOptions()

stuff needed for esp relative formatting:
	2 minutes ago
	2 minutes from now
	06:07 Today
	return `${differenceInMinutes} ${minuteStr} ${tag}`
	
	rem: translate the logger string:
	$logger.warn(`Invalid mode (${mode || 'empty'}) or value (${value || 'empty'}) in datetime filter`)
*/
