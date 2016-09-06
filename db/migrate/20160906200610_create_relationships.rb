class CreateRelationships < ActiveRecord::Migration
  def change
    create_table :relationships do |t|
      t.integer :follower_id, null: false
      t.integer :followee_id, null: false

      t.timestamps null: false
    end
    add_index :relationships, :follower_id
    add_index :relationships, :followee_id
  end
end
