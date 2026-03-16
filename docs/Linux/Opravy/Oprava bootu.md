# Oprava Linux Mint – Kernel Panic (Unable to mount root fs)

Tento postup opravuje problém:


Kernel panic - not syncing: VFS: Unable to mount root fs on unknown-block


K problému obvykle dojde po:

- přerušeném `apt upgrade`
- restartu během aktualizace kernelu
- poškozeném `initramfs`
- rozbitém `grub` bootloaderu

---

# 1. Boot z Live USB

Nabootuj systém z [**Linux Mint Live USB**](../Prikazy/System/Mint%20Live%20USB.md).

Vyber:


Start Linux Mint


Po nabootování otevři **Terminal**.

---

# 2. Zjištění disků

```Bash
lsblk -f
```

Příklad:

```
sda
├─sda1 vfat FAT32 SYSTEM
├─sda2 ntfs
├─sda3 ntfs
├─sda4 ntfs
└─sda5 ext4
```

Význam:
```
| partition | význam |
|---|---|
| sda1 | EFI boot partition |
| sda5 | Linux Mint root filesystem |
```
---

# 3. Připojení systému

```Bash
sudo mount /dev/sda5 /mnt
```

---

# 4. Připojení systémových složek

```Bash
sudo mount --bind /dev /mnt/dev
sudo mount --bind /proc /mnt/proc
sudo mount --bind /sys /mnt/sys
```

---

# 5. Vstup do systému

```Bash
sudo chroot /mnt
```

Prompt se změní například na:

```Bash
root@mint:/#
```

---

# 6. Oprava initramfs

```Bash
update-initramfs -c -k all
```

Tím se znovu vytvoří initramfs pro všechny jádra.

---

# 7. Aktualizace GRUB konfigurace

```Bash
update-grub
```

---

# 8. Připojení EFI partition

Pokud se objeví chyba:


`cannot find EFI directory`


připoj EFI oddíl:

```Bash
mount /dev/sda1 /boot/efi
```

---

# 9. Instalace GRUB

```Bash
grub-install /dev/sda
```

Správný výstup:


`Installation finished. No error reported.`


---

# 10. Aktualizace boot menu

````Bash
update-grub
```

---

# 11. Restart

```Bash
exit
reboot
````

Před restartem **vytáhni USB disk**.

---

# Výsledek

Po restartu by měl systém:

1. načíst GRUB z disku
2. spustit Linux Mint kernel
3. úspěšně připojit root filesystem

Systém by měl nabootovat normálně.

---

# Doporučení po opravě

Po přihlášení spusť:

```Bash
sudo apt update
sudo apt upgrade
```

Pokud jsou rozbité balíčky:

```Bash
sudo apt --fix-broken install
```

---

# Tip

Používej **Timeshift** pro snapshoty systému:

```Bash
sudo timeshift-gtk
```

To umožní obnovit systém během několika minut.