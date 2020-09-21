<?php


namespace App\Domain\Writers\Entities;


use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

/**
 * Class Writer
 * @package App\Domain\Writers\Entities
 */
class Writer extends Authenticatable
{
    use HasFactory, Notifiable, HasApiTokens;
}
