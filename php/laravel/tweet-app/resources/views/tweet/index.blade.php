<!doctype html>
<html lang="ja">

<head>
</head>

<body>
<h1>つぶやき</h1>

@foreach($tweets as $tweet)
    <p>
        {{ $tweet->content }}
    </p>
@endforeach

<div>

    <p>投稿フォーム</p>

    <form action="{{route('tweet.create')}}" method="post">
        @csrf
        <span>140字まで</span>
        <label for="tweet-content">つぶやく</label>
        <textarea name="tweet" id="tweet-content"
                  placeholder="つぶやきを入力"
        >
        </textarea>

        <button type="submit">
            投稿
        </button>

        @error('tweet')
        <p style="color:red"> {{$message}}</p>
        @enderror
    </form>

</div>

</body>


</html>
