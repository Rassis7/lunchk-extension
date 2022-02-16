# Lunchk

[![Netlify Status](https://api.netlify.com/api/v1/badges/545bbce5-8f34-4834-9e16-685a9990c987/deploy-status)](https://app.netlify.com/sites/lunchk-extensio/deploys)

![video](/docs/video.gif)

## Descrição

A ideia do **Lunchk** é que ele seja um gerador/validador de senhas.
Inicialmente a aplicação será uma extensão do chrome que irá gerar senhas aleatórias, em um outro momento essas senhas serão salvas por domínio de sites e resgatar quando os acessar.

A validação será feito por meio de um APP em PWA usando [2fa](https://pt.wikipedia.org/wiki/Identifica%C3%A7%C3%A3o_por_dois_fatores) e a extensão irá gerar um QrCode para essa validação.

![](/docs/arch.png)


## Must to have

- [x] Gerador de senha segura
- [ ] Validador por meio de qrcode 2FPA
- [ ] Ler o QrCode e bloquear/liberar o acesso
- [ ] Criptografias baseada na conta
- [ ] Usar conta do Google com chave de criptografia
- [ ] OAuth para tudo

## Nice to have

- [ ] Colar a senha automaticamente no campo de password
- [ ] Gerar a senha automaticamente em um campo de password
- [ ] Gerenciar as aplicações no APP
- [ ] OpenId
- [ ] Mudar senha pelo app e alterar em geral 🤔