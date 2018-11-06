## messagesテーブル

|Column|Type|Options|
|------|----|-------|
|body|text|
|image|string|
|user_id|integer|null: false, t.references :user|
|group_id|integer|null: false, t.references :group|

### Association
- belongs_to :group
- belongs_to :user


## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|

### Association
- has_many :messages
- had_many :members
- had_many :users, through : :members


## usersテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|
|e-mail|string|

### Association
- has_many :members
- has_many :messages
- has_many :groups, through: :members



## membersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, t.references :user|
|group_id|integer|null: false, t.references :group|

### Association
- belongs_to :group
- belongs_to :user
