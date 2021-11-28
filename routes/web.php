<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
 */

Route::view('/', 'index');
Route::view('/admin', 'admin');
Route::view('/blog', 'blog');
Route::view('/privacy-policy', 'privacy-policy');
Route::view('/faq', 'faq');
Route::view('/about', 'about');
Route::view('/regions', 'regions');
Route::view('/coupons', 'coupons.index');
Route::view('/coupons/vip', 'coupons.vip');
Route::view('/coupons/50', 'coupons.50');
Route::view('/coupons/single', 'coupons.single');
Route::view('/401', '401');
Route::view('/404', '404');
