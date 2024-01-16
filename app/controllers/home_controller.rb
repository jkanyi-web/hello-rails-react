class HomeController < ApplicationController
  def index
    render 'home/index'
  end

  def random_greeting
    @greeting = Greeting.order(Arel.sql('RANDOM()')).first
    render json: @greeting
  end
end
