class CreateInquiries < ActiveRecord::Migration
  def change
    create_table :inquiries do |t|
      t.string :email, :null => false
      t.string :name, :null => false
      t.text :comment

      t.timestamps
    end
  end
end
