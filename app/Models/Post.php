<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasFactory;

    /**
     * fillable
     * 
     * @var array
     */
    protected $fillable = [
        'title',
        'content',
        'image',
        'category',
        'ditulis_oleh',
        'ditinjau_oleh',
    ];

    // public function category() {
    //     return $this->belongsToMany('App\Models\Category', 'categories', 'posts_id', 'category_id');
    // }
    public function category() {
        return $this->belongsToMany(Category::class);
    }
}
