class TweetsController < ApplicationController
    def index
        tweets=Tweet.all
        render json:tweets
    end

    def create
        tweet=Tweet.new(tweet_params)
        if tweet.save
            render json:tweet
        else
            render json:{error:'something is wrong'}
        end
    end

    def destroy
        tweet=Tweet.find(params[:id])
        tweet.destroy
    end
    
    private
    
    def tweet_params
        params.require(:tweet).permit(:body)
    end
end
