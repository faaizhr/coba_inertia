<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;

    public $table = "Category";

    /**
     * fillable
     * 
     * @var array
     */
    protected $fillable = [
        'category',
    ];

    // public function posts() {
    //     return $this->belongsToMany('App\Models\Posts');
    // }
    public function posts() {
        return $this->belongsToMany(Post::class);
    }
}
