---
title: Configuring Realmd on Debian
description: How to install and configure RealmD with SSSD on Debian.
date: '2025-03-17'
categories:
  - sysadmin
published: true
---

Today we will be learning how to use RealmD in conjunction with SSSD on Debian to allow for user authentication and authorization. This improves network security and simplifies domain management. We will cover the installation, configuration, and troubleshooting of RealmD and its integration with SSSD on Debian.

## Step 1: Installation
First, we need to install the necessary packages. Open a terminal and run the following commands:

It should be noted that for this installation I will be using Debian 11 (Bullseye) as the operating system.
```bash
sudo apt update
sudo apt install realmd sssd ntp adcli libsss-sudo -y
```

## Step 2: Ensure DNS is configured

Before joining the domain, we need to ensure that DNS is properly configured. Open the `/etc/resolv.conf` file and add the following lines (ensuring to replace 1.1.1.1 with your domain controllers IP addresses):

```bash
nameserver 1.1.1.1
```

If you are using a different distro, please check the documentation for your specific distribution to ensure that DNS is properly configured.

## Step 3: Joining the Domain
Once you have completed the installation, we can join the domain. Run the following command:

```bash
realm join -v ADATUM.COM
```

This should result in a successful output.

## Step 4: Verify the Domain Join
To verify that the domain has been joined successfully, run the following command:

```bash
realm list
```

This should result in all the information about your domain.

## Step 5: Configuring SSSD
### Step 5.1: Linux PAM
To configure PAM please edit the `/etc/pam.d/common-session` file and add the following lines:

```bash
[...]
# end of pam-auth-update config
session required pam_mkhomedir.so skel=/etc/skel/ umask=0022
```

This allows the user to login and have a home directory created..

### Step 5.2: Configuring SUDO
To configure sudo please edit ``/etc/sudoers.d/domain_admins`` and add the following line:

```bash
%domain\ admins ALL=(ALL) ALL
```

Or should you want passwordless sudo for domain admins, add the following line:

```bash
%domain\ admins ALL=(ALL) NOPASSWD:ALL
```

## Step 6: Configuring SSH Keys
### Step 6.1: SSSD Configuration
For this step it is expected you already have a user with an SSH key stored in ``altUserIdentities`` in ADDS. If you dont, please do that first (I wont go into it here).

Please edit the config to look something like this, specific other config will be up to your own discretion but it should look something like my file below:

```
[sssd]
domains = ADATUM.COM
config_file_version = 2
+ services = nss, pam, ssh

[domain/ADATUM.COM]
default_shell = /bin/bash
krb5_store_password_if_offline = True
cache_credentials = True
krb5_realm = ADATUM.COM
realmd_tags = manages-system joined-with-adcli
id_provider = ad
fallback_homedir = /home/%u
ad_domain = ADATUM.COM
+ use_fully_qualified_names = False
ldap_id_mapping = True
access_provider = ad
#full_name_format = %1$s
+ ldap_user_extra_attrs = altSecurityIdentities
+ ldap_user_ssh_public_key = altSecurityIdentities
```

The lines to look out for are marked with a ``+`` at the beginning.


### Step 6.2: SSH Configuration

Finally, you need to edit ``/etc/ssh/sshd_config`` and add the following line:

```
AuthorizedKeysCommand /usr/bin/sss_ssh_authorizedkeys
AuthorizedKeysCommandUser nobody
```

Once this is added you can attempt SSH and it should work flawlessly.


## Conclusion
Today we have successfully configured SSSD to use AD as a backend for user authentication and authorization. We have also configured SSH to use SSSD for SSH key management. This allows us to manage user accounts and SSH keys in a centralized location, making it easier to manage and secure our infrastructure.

Should you have any questions or issues, please feel free to reach out to me via Discord (@n1xn0v4).
