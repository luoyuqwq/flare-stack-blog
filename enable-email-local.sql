-- 本地解锁邮箱密码注册：给 system_config 写入一个"假"的 SMTP 配置。
-- 本地 ENVIRONMENT=dev 不会真的发信，验证链接会打印在 dev server 终端。
INSERT INTO system_config (id, config_json)
VALUES (
  1,
  '{"schemaVersion":1,"email":{"host":"smtp.example.com","port":465,"username":"test","password":"test","senderAddress":"test@example.com"}}'
)
ON CONFLICT(id) DO UPDATE SET config_json = excluded.config_json;
