# Nutmeg
A tiny clientside Website generator.

## Why?

* Avoid code repetition
* Better abstraction
* Improve maintainability
* Reduce code size
* Reduce bandwidth usage
* Reduce load time
* It's cool

## What's wrong with?

* Pre-processors:
	* Produce *large* amounts of code
* The big guys (React / Angular / Other)
	* Try to do too many things
	* Are massive libraries
	* Dictate code style / data flow

## Explanations:

```
<html>
<script src="nutmeg.js"></script>
<script>

// Let's make our elements global so we don't have to do nutmeg.div(),
// Because Nutmeg is all about syntactic minimalism.
nutmeg().global();

// Important! This function will be called when the browser is ready to use Nutmeg.
document.onload = function() {

// Need to attach this stuff to the page somehow, we do that with a body function
body(
	// Elements retain their HTML-y names
	div(
		// Render some text (woah!)
		h1('Nutmeg'),
		'Hello World',
		// The code retains the same basic structure as HTML
		div(
			div(
				div(
					div(
						"Don't disturb my nest!",
						"Thanks."
					)
				)
			)
		)
	),
	
)

}
</script>
<body>
</body>
</html>
```
