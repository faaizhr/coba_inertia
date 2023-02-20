<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Feedback extends Model
{
    use HasFactory;

    public $table = "Feedback";

    /**
     * fillable
     * 
     * @var array
     */
    protected $fillable = [
        'nama',
        'profesi',
        'layanan',
        'comment',
    ];


}
