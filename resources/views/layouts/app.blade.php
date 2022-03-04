@extends('layouts.styles')
<style>
    [v-cloak] {
        display: block;
        padding: 50px 0;
    }

    [v-cloak]>* {
        display: none;
    }
</style>


@yield('content')



@extends('layouts.scripts')