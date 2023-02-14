<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Models\Category;
use App\Models\Categories;
use App\Models\Katagori;
use Inertia\Inertia;
use Illuminate\Http\Request;

class BlogController extends Controller
{
    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {

    }


    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // $joinTable = Post::join('category_post', 'posts.id', '=', 'category_post.post_id')
        //     ->join('category', 'category.id', '=', 'category_post.category_id')
        //     ->select('posts.*', 'category.category')
        //     ->get();
        
        $postsDESC = Post::with('category')->orderBy('id', 'desc')->get();
        $category = Category::get();
        $joinTable = Post::with('category')->get();
        $filter = Category::with('posts')->get();

        return Inertia::render('Blog/Index', [
            // 'posts' => $posts,
            'category' => $category,
            'joinTable' => $joinTable,
            'filter' => $filter,
            'postsDESC' => $postsDESC,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $posts = Post::with('category')->where('id', '!=', $id)->get();

        $post = Post::find($id);
        
        $joinTable = Post::with('category')->find($id);

        return Inertia::render('Blog/Detail', [
            'post'=>$post,
            'posts'=>$posts,
            'joinTable'=>$joinTable,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(Post $post)
    {
 
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Post $post)
    {

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {

    }
}
