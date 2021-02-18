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

Route::get('/', 'UserController@index');

// Route::group(['prefix' => 'users'], function() {
// 	Route::get('/list', 'UserController@index')->name('list');

// 	Route::group(['prefix' => 'profile'], function() {
// 		Route::get('/assessments', 'UserProfileController@assessments')->name('assessments');
// 		Route::get('/reports', 'UserProfileController@reports')->name('reports');
// 	});
// });