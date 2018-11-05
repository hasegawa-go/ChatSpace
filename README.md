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
|messages_id|integer|null: false, foreign_key: true|

### Association
- has_many :messages
- had_many :members


## usersテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|
|e-mail|text|

### Association
- has_many :members
- has_many :messages


## membersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, t.references :group|

### Association
- belongs_to :group
- belongs_to :user
