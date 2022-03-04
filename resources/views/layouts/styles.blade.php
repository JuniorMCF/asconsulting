<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}" />
    <link rel="icon" sizes="192x192" href="{{ asset('app/logo_facebook.PNG')}}">
    <title></title>
    <link href="{{ asset('css/app.css') }}" type="text/css" rel="stylesheet" />

</head>


<body>