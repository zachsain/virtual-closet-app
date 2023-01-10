class BrandsController < ApplicationController

    def index
        brands = Brand.all
        render json: brands
    end

    def create 
        brand = Brand.create!(brand_params)
        render json: stock
    end 

    private 

    def brand_params 
        params.permit(:name, :address, :head_quarters, :logo_url, :description)
    end
end
