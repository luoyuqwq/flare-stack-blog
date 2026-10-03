-- 本地直接把该账号邮箱标记为已验证，跳过邮件验证链接
UPDATE user SET email_verified = 1 WHERE email = 'luoyuqwq@outlook.com';
