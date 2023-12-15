<?php

namespace App\Http\Controllers\Tweet;

use App\Http\Controllers\Controller;
use App\Http\Requests\Tweet\CreateRequest;
use App\Models\Tweet;

class CreateController extends Controller
{
    /**
     * @param CreateRequest $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function __invoke(CreateRequest $request)
    {
        $tweet = new Tweet();
        $tweet->content = $request->tweet();
        $tweet->save();
        return redirect()->route('tweet.index');
    }
}
