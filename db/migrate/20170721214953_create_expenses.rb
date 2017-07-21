class CreateExpenses < ActiveRecord::Migration[5.0]
  def change
    create_table :expenses do |t|
      t.column :date, :datetime, null: false
      t.column :amount, :decimal, null: false, precision: 10, scale: 2
      t.column :description, :string, null: false
      t.timestamps
    end
  end
end
