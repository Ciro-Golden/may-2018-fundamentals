// 1. Get the href attribute of the first link on the page.
$("a")[0].href

// 2. Get the number of links on this page.
$("a").length

// 3. Change the text for all links to be your name.
let links = Array.from($('a'))

for(let page_link of links) {
  $(page_link).text('Raya')
}

$("a").each(function(index, link) {
  $(this).text("Jeeves")
})

$("a").text('Cizo')

// 4. Write some jQuery to make Craigslist"s logo link to http://www.google.com
$("#logo a")[0].href = "http://www.google.com";
$("#logo a").first().attr("href", "http://www.google.com")

$("a").each(function(index, link) {
  $(this).attr("href", "http://www.google.com")
})
