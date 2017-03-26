(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var menuToggle = function menuToggle() {
  $('.menuToggle').click(function () {
    if (!$('.menuToggle').hasClass('close')) {
      $('.menuToggle').addClass('close');
      $('.menu').removeClass('hideMenu').addClass('showMenu animated fadeIn');
    } else {
      $('.menuToggle').removeClass('close');
      $('.menu').removeClass('showMenu').addClass('hideMenu');
    }
  });
};

$(function () {
  menuToggle();
  $('.logo').midnight();
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvc2NyaXB0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNDQSxJQUFNLGFBQWEsU0FBYixVQUFhLEdBQU07QUFDdkIsSUFBRSxhQUFGLEVBQWlCLEtBQWpCLENBQXVCLFlBQVc7QUFDaEMsUUFBRyxDQUFDLEVBQUUsYUFBRixFQUFpQixRQUFqQixDQUEwQixPQUExQixDQUFKLEVBQXVDO0FBQ3JDLFFBQUUsYUFBRixFQUFpQixRQUFqQixDQUEwQixPQUExQjtBQUNBLFFBQUUsT0FBRixFQUFXLFdBQVgsQ0FBdUIsVUFBdkIsRUFBbUMsUUFBbkMsQ0FBNEMsMEJBQTVDO0FBQ0QsS0FIRCxNQUdNO0FBQ0gsUUFBRSxhQUFGLEVBQWlCLFdBQWpCLENBQTZCLE9BQTdCO0FBQ0EsUUFBRSxPQUFGLEVBQVcsV0FBWCxDQUF1QixVQUF2QixFQUFtQyxRQUFuQyxDQUE0QyxVQUE1QztBQUNGO0FBQ0YsR0FSRDtBQVNELENBVkQ7O0FBWUEsRUFBRSxZQUFXO0FBQ1o7QUFDQyxJQUFFLE9BQUYsRUFBVyxRQUFYO0FBQ0QsQ0FIRCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJcdFxuY29uc3QgbWVudVRvZ2dsZSA9ICgpID0+IHtcbiAgJCgnLm1lbnVUb2dnbGUnKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICBpZighJCgnLm1lbnVUb2dnbGUnKS5oYXNDbGFzcygnY2xvc2UnKSl7XG4gICAgICAkKCcubWVudVRvZ2dsZScpLmFkZENsYXNzKCdjbG9zZScpO1xuICAgICAgJCgnLm1lbnUnKS5yZW1vdmVDbGFzcygnaGlkZU1lbnUnKS5hZGRDbGFzcygnc2hvd01lbnUgYW5pbWF0ZWQgZmFkZUluJyk7XG4gICAgfSBlbHNle1xuICAgICAgXHQkKCcubWVudVRvZ2dsZScpLnJlbW92ZUNsYXNzKCdjbG9zZScpO1xuICAgICAgXHQkKCcubWVudScpLnJlbW92ZUNsYXNzKCdzaG93TWVudScpLmFkZENsYXNzKCdoaWRlTWVudScpXG4gIFx0XHR9XG4gIH0pO1xufVxuXG4kKGZ1bmN0aW9uKCkge1xuXHRtZW51VG9nZ2xlKCk7XG4gICQoJy5sb2dvJykubWlkbmlnaHQoKTtcbn0pOyJdfQ==
