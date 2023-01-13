class PiecesController < ApplicationController

    def index
        pieces = Piece.all
        render json: pieces
    end

    def create 
        piece = Piece.create!(piece_params)
        render json: piece
    end 

    def update
        piece = Piece.find(params[:id])
        piece.update!(piece_params)
        render json: piece
    end 

    def destroy 
        piece = Piece.find(params[:id])
        piece.destroy  
        head :no_content
    end
    private 

    def piece_params 
        params.permit(:user_id, :brand_id, :style_id, :name, :price, :notes, :size, :featured_image, :image_url)
    end 
end
