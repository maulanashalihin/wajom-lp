---
title: "Setup Auto Reply Basic"
description: "Panduan mudah untuk setup auto reply basic di Wajom untuk handle responses automatik dari contact anda."
category: "basic"
categoryLabel: "Asas"
keywords: "auto reply basic setup automation response"
duration: "15 minit"
number: "2"
bgGradient: "from-blue-400 to-blue-600"
icon: '<svg class="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>'
publishDate: "2024-01-18"
author: "Tim Wajom"
---

# Setup Auto Reply Basic

Auto reply adalah feature penting dalam Wajom yang membolehkan anda respond secara automatik kepada mesej yang masuk. Tutorial ini akan mengajar anda cara setup auto reply basic untuk handle responses dari contact.

## Apa Yang Anda Akan Pelajari

- ✅ Cara enable auto reply di Wajom
- ✅ Setup keyword triggers yang berkesan
- ✅ Membuat response messages yang professional
- ✅ Configure timing dan delay settings
- ✅ Monitor dan optimize auto reply performance
- ✅ Best practices untuk auto reply

## Prasyarat

Sebelum memulakan tutorial ini:
- ✅ Akaun Wajom sudah setup ([Tutorial #1](/tutorial/cara-buat-akun-baru-hubungkan-whatsapp))
- ✅ WhatsApp sudah connected dan aktif
- ✅ Basic understanding tentang WhatsApp messaging

## Langkah 1: Akses Auto Reply Settings

### 1.1 Navigate ke Auto Reply

1. Login ke portal Wajom
2. Pilih WhatsApp instance yang aktif
3. Klik menu **"Auto Reply"** di sidebar kiri
4. Klik **"Create New Auto Reply"**

### 1.2 Basic Configuration

Isi maklumat basic:
- **Name**: Beri nama untuk auto reply rule
- **Status**: Enable/Disable
- **Priority**: Set priority jika ada multiple rules

## Langkah 2: Setup Keyword Triggers

### 2.1 Keyword Configuration

Setup keywords yang akan trigger auto reply:

**Common Keywords:**
- `hi`, `hello`, `hai` → Greeting response
- `info`, `maklumat` → Information response  
- `harga`, `price` → Pricing response
- `help`, `bantuan` → Help response
- `stop`, `berhenti` → Unsubscribe response

### 2.2 Advanced Triggers

**Exact Match:**
- Keyword mesti exact sama
- Case sensitive atau insensitive
- Whole word atau partial match

**Contains Match:**
- Mesej mengandungi keyword
- Lebih flexible untuk natural conversation
- Good untuk catch variations

## Langkah 3: Create Response Messages

### 3.1 Professional Greeting

```
Hi {nama}! 👋

Terima kasih kerana menghubungi kami.

Saya adalah assistant automatik untuk [Company Name]. 

Bagaimana saya boleh membantu anda hari ini?

Untuk response segera, sila hubungi:
📞 +60 10-810 2455
```

### 3.2 Information Response

```
Terima kasih atas minat anda! 📋

Berikut adalah maklumat yang anda perlukan:

🔹 Produk/Service: [Description]
🔹 Harga: [Price Range]  
🔹 Delivery: [Timeframe]
🔹 Warranty: [Terms]

Untuk info lanjut atau booking:
💬 Reply "BOOK" 
📞 Call +60 10-810 2455
```

### 3.3 Pricing Response

```
Harga Package Kami: 💰

📦 Basic Package: RM XXX
   ✅ Feature 1
   ✅ Feature 2
   ✅ Feature 3

📦 Premium Package: RM XXX
   ✅ Semua Basic features
   ✅ Advanced Feature 1
   ✅ Advanced Feature 2

🎯 Special Offer: Discount 20% untuk 10 customer pertama!

Nak book sekarang? Reply "BOOK"
```

## Langkah 4: Configure Advanced Settings

### 4.1 Timing Settings

**Response Delay:**
- Immediate: 0-5 seconds
- Natural: 10-30 seconds  
- Delayed: 1-5 minutes

**Active Hours:**
- Set masa aktif: 9 AM - 9 PM
- Weekend settings
- Holiday exceptions

### 4.2 Frequency Control

**Per Contact Limits:**
- Maximum replies per day
- Cooldown period between replies
- Avoid spam responses

**Global Limits:**
- Total auto replies per day
- Rate limiting untuk avoid banned

## Langkah 5: Testing Auto Reply

### 5.1 Test Setup

1. **Create Test Contact**: Guna nombor lain untuk test
2. **Send Test Messages**: Try different keywords
3. **Check Response Time**: Monitor delay
4. **Verify Content**: Pastikan mesej betul
5. **Test Edge Cases**: Try unexpected inputs

### 5.2 Common Test Scenarios

**Test Cases:**
- Send exact keyword
- Send keyword dalam sentence
- Send multiple keywords
- Send during off-hours
- Send repeatedly (test limits)

## Langkah 6: Monitor Performance

### 6.1 Key Metrics

Track metrics penting:
- **Trigger Rate**: Berapa kali auto reply triggered
- **Response Rate**: Success rate of responses
- **Engagement**: Follow-up conversations
- **Conversion**: Leads generated

### 6.2 Analytics Dashboard

Monitor dalam Wajom dashboard:
- Real-time auto reply activity
- Daily/weekly reports
- Popular keywords
- Response effectiveness

## Best Practices

### ✅ Do's

**Content Guidelines:**
- Keep responses helpful dan relevant
- Use personalization {nama}, {company}
- Include clear call-to-action
- Provide alternative contact methods
- Be professional but friendly

**Technical Guidelines:**
- Test thoroughly before going live
- Set appropriate delays (avoid instant responses)
- Use frequency limits
- Monitor performance regularly
- Update responses based on feedback

### ❌ Don'ts

**Avoid These Mistakes:**
- Don't send generic, unhelpful responses
- Don't respond to every single message
- Don't use auto reply untuk sales pitch sahaja
- Don't ignore follow-up conversations
- Don't set responses too long
- Don't forget to update outdated information

## Advanced Tips

### 1. Smart Keyword Strategy

**Keyword Grouping:**
```
Greeting Group: hi, hello, hai, morning, evening
Info Group: info, maklumat, details, about
Price Group: harga, price, cost, berapa
Help Group: help, bantuan, support, tolong
```

### 2. Conditional Responses

**Time-based Responses:**
- Morning: "Selamat pagi!"
- Afternoon: "Selamat petang!"  
- Evening: "Selamat malam!"
- Weekend: "Selamat hujung minggu!"

### 3. Follow-up Sequences

**Multi-step Auto Reply:**
1. Initial response dengan info basic
2. Follow-up dengan detailed information
3. Final follow-up dengan special offer

## Troubleshooting

### Masalah Biasa

**Q: Auto reply tidak trigger**
- Check keyword spelling dan case sensitivity
- Verify auto reply status enabled
- Check timing settings
- Ensure WhatsApp connection active

**Q: Response delay terlalu lama**
- Adjust delay settings
- Check server performance
- Verify internet connection
- Contact support jika persistent

**Q: Too many auto replies sent**
- Review frequency limits
- Check keyword overlap
- Adjust trigger conditions
- Monitor daily limits

## Langkah Seterusnya

Tahniah! Anda telah berjaya:
- ✅ Setup auto reply basic
- ✅ Configure keywords dan responses
- ✅ Test dan monitor performance
- ✅ Implement best practices

### Tutorial Seterusnya

1. **[Tutorial #3: Cara Warm Up Nombor WhatsApp](/tutorial/cara-warm-up-nombor-whatsapp)**
2. **[Tutorial #4: Membuat Campaign Pertama](/tutorial/membuat-campaign-pertama)**
3. **Tutorial #5: Auto Reply Advanced** (Coming Soon)

## Bantuan dan Support

Jika anda perlukan bantuan:

- 📞 **WhatsApp Support**: [+60 10-810 2455](https://wa.me/60108102455)
- 📧 **Email**: support@wajom.co
- 💬 **Live Chat**: Portal Wajom
- 📚 **Knowledge Base**: help.wajom.co

---

**Masa Tutorial**: ~15 minit  
**Tahap Kesukaran**: Mudah  
**Prasyarat**: Tutorial #1  

*Tutorial ini dikemaskini pada: 18 Januari 2024*
