class StylesController < ApplicationController

    def index
        style = Style.all
        render json: style
    end

    def create 
        style = Style.create!(style_params)
        render json: style
    end 

    def destroy 
        style = Style.find(params[:id])
        style.destroy  
        head :no_content
    end

    private 

    def style_params 
        params.permit(:name, :url_photo, :description, :category)
    end 


end
