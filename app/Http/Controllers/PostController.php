<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Inertia\Inertia;
use Illuminate\Http\Request;

class PostController extends Controller
{
    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('Posts/Create');
    }


    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $posts = Post::latest()->get();

        return Inertia::render('Posts/Index', [
            'posts' => $posts,
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
        //set validation
        $request->validate([
            'title'   => 'required',
            'content' => 'required',
            'image' => 'required',
            'category' => 'required',
        ]);

        //create post
        $post = Post::create([
            'title'     => $request->title,
            'content'   => $request->content,
            'image'   => $request->image,
            'category'   => $request->category
        ]);

        if($post) {
            return Redirect()->route('posts.index')->with('message', 'Data Berhasil Disimpan!');
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show()
    {
        // 
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(Post $post)
    {
        return Inertia::render('Posts/Edit', [
            'post'=>$post
        ]);
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
        //set validation
        $request->validate([
            'title'   => 'required',
            'content' => 'required',
            'image' => 'required',
            'category' => 'required',
        ]);

        //update post
        $post->update([
            'title'     => $request->title,
            'content'   => $request->content,
            'image'   => $request->image,
            'category'   => $request->category
        ]);

        if($post) {
            return Redirect()->route('posts.index')->with('message', 'Data Berhasil Diupdate!');
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //find post by ID
        $post = Post::findOrfail($id);

        //delete post
        $post->delete();

        if($post) {
            return Redirect()->route('posts.index')->with('message', 'Data Berhasil Dihapus!');
        }
    }
}
