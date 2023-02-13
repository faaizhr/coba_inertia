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

// Route::get('/', function () {
//     return view('Home');
// });

Route::resource('/', \App\Http\Controllers\HomeController::class);
Route::resource('/bantuan', \App\Http\Controllers\BantuanController::class);
Route::resource('/posts', \App\Http\Controllers\PostController::class);
Route::resource('/artikel', \App\Http\Controllers\BlogController::class);
Route::resource('/tentang-kami', \App\Http\Controllers\TentangKamiController::class);
Route::resource('/fitur', \App\Http\Controllers\FiturController::class);

Route::get('/artikel/{id}', [BlogController::class, 'show']);
Route::get('/posts/{id}', [PostController::class, 'show']);