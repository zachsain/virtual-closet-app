class CreatePieces < ActiveRecord::Migration[6.1]
  def change
    create_table :pieces do |t|

      t.timestamps
    end
  end
end
