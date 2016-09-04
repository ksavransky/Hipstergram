class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.text    :comment_text
      t.integer :user_id, null: false
      t.integer :post_id, null: false
      t.timestamps null: false
    end
    add_index :comments, :post_id
    add_index :comments, :user_id
  end
end
