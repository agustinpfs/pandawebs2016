var $ = require('jquery')
var page = require('page')
// var Chat = require('../chat/chat')
var articleTemplate = require('./template.jade')

page('/portfolio', portfolio)


function portfolio() {
	$('.app-container').html(articleTemplate())
}