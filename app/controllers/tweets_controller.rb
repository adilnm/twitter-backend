class TweetsController < ApplicationController
    def index
        tweets=Tweet.all

        render json:tweets
    end
end

def create
    tweet=Tweet.new(tweet_params)
    if tweet.save
        render json:tweet
    else
        render json:{error:'something is wrong'}
    end
end

private

def tweet_params
    params.require(:tweet).permit(:body)
end