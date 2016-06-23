class CreateJobs < ActiveRecord::Migration
  def change
    create_table :jobs do |t|
      t.string :title
      t.string :city
      t.string :state
      t.string :description
      t.integer :company_id

      t.timestamps null: false
    end
  end
end
