<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Models\Category;
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
        $category = Category::get();

        return Inertia::render('Posts/Create', [
            'category' => $category,
        ]);
    }


    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

        $posts = Post::latest()->get();
        $category = Post::latest()->get();

        $joinTable = Post::with('category')->get();

        
        return Inertia::render('Posts/Index', [
            'posts' => $posts,
            'category' => $category,
            'joinTable' => $joinTable,
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
        
        // dd($request);
        //set validation
        $request->validate([
            'title'   => 'required',
            'content' => 'required',
            'image' => 'required|image|file|max:2048',
            'ditulis_oleh' => 'required',
            'ditinjau_oleh' => 'required',
        ]);

        //create post
        $post = Post::create([
            'title'     => $request->title,
            'content'   => $request->content,
            'image'   => $request->file('image')->store('post-images'),
            'ditulis_oleh'   => $request->ditulis_oleh,
            'ditinjau_oleh'   => $request->ditinjau_oleh,
        ]);
        if ($request->has('category')) {
            $post->category()->attach($request->category);
        };
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
    public function show($id)
    {
        $joinTable = Post::with('category')->find($id);

        return Inertia::render('Posts/Detail', [
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
        $category = Category::get();
        $joinTable = Post::with('category')->find($post->id);

        return Inertia::render('Posts/Edit', [
            'post'=>$joinTable,
            'category'=>$category,
            // 'joinTable'=>$joinTable,
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
        dd($request);
        //set validation
        $request->validate([
            'title'   => 'required',
            'content' => 'required',
            // 'image' => 'required',
            'ditulis_oleh' => 'required',
            'ditinjau_oleh' => 'required',
        ]);

        //update post
        $post->update([
            'title'     => $request->title,
            'content'   => $request->content,
            // 'image'   => $request->file('image')->store('post-images'),
            'ditulis_oleh'   => $request->ditulis_oleh,
            'ditinjau_oleh'   => $request->ditinjau_oleh,
        ]);
        if ($request->has('category')) {
            $post->category()->sync($request->category);
        };
        if ($request->has('iamge')) {
            $post->post()->sync($request->file('image')->store('post-images'));
        };


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
