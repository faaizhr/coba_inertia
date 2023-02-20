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

Route::get('/register', [\App\Http\Controllers\RegisterController::class, 'index']);
Route::post('/register', [\App\Http\Controllers\RegisterController::class, 'store']);

Route::get('/login', [\App\Http\Controllers\LoginController::class, 'index'])->name('login')->middleware('guest');
Route::post('/login', [\App\Http\Controllers\LoginController::class, 'store']);
Route::post('/logout', [\App\Http\Controllers\LoginController::class, 'destroy'])->middleware('auth');


Route::resource('/', \App\Http\Controllers\HomeController::class);
Route::resource('/posts', \App\Http\Controllers\PostController::class)->middleware('auth');
Route::resource('/bantuan', \App\Http\Controllers\BantuanController::class);
Route::resource('/artikel', \App\Http\Controllers\BlogController::class);
Route::resource('/tentang-kami', \App\Http\Controllers\TentangKamiController::class);
Route::resource('/fitur', \App\Http\Controllers\FiturController::class);
// Route::resource('/category', \App\Http\Controllers\CategoryController::class);

Route::get('/artikel/{id}', [BlogController::class, 'show']);
Route::get('/posts/{id}', [PostController::class, 'show']);